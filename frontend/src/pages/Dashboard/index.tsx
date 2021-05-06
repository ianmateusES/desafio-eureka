import React, { useState, useCallback, FormEvent } from 'react';
import InputMask from 'react-input-mask';
import ReactLoading from 'react-loading';

import api from '../../services/api';

import {
  Container,
  Title,
  Form,
  Error,
  Content,
  AdressContent,
  TitleAddress,
  AddresBody,
} from './styles';

interface IAddress {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
}

const Dashboard: React.FC = () => {
  const [cep, setCep] = useState('');
  const [inputError, setInputError] = useState('');
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState<IAddress>({} as IAddress);

  const handleAddRepositories = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!cep) {
        setInputError('Digite o CEP');
        return;
      }
      setLoading(true);

      try {
        const resp = await api.get<IAddress>(`/cep/${cep}`);
        const addressResp = resp.data;

        if (addressResp.erro) {
          setInputError('CEP não encontrado');
          return;
        }

        setAddress(addressResp);
        setInputError('');
        setCep('');
      } catch (error) {
        setInputError('Error na busca do CEP');
      } finally {
        setLoading(false);
      }
    },
    [cep],
  );

  return (
    <Container>
      <Title>Bem-vindo a consulta de CEP</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepositories}>
        <InputMask
          mask="99999-999"
          value={cep}
          onChange={event => setCep(event.target.value)}
          placeholder="Digite o CEP"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Content>
        {loading && (
          <ReactLoading type="spin" color="#04d361" height={50} width={50} />
        )}

        {address.cep && (
          <AdressContent>
            <TitleAddress>Endereço:</TitleAddress>
            <AddresBody>
              <strong>{address.cep}</strong>
              <strong>{address.logradouro}</strong>
              <strong>{address.bairro}</strong>
              <strong>
                {address.localidade}, {address.uf}
              </strong>
              <strong>{address.complemento}</strong>
            </AddresBody>
          </AdressContent>
        )}
      </Content>
    </Container>
  );
};

export default Dashboard;
