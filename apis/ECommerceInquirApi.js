import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import { handleResponse, isOkStatus } from '../utils/handleRestApiResponse';
import usePrevious from '../utils/usePrevious';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const getCommerceGET = (Constants, _args, handlers = {}) =>
  fetch(
    `https://suggest.taobao.com/sug?code=${encodeURIComponent(
      `utf-8`
    )}&q=${encodeURIComponent(`裤子`)}&callback=cb`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  ).then(res => handleResponse(res, handlers));

export const useGetCommerceGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['todos', args],
    () => getCommerceGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchGetCommerceGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useGetCommerceGET(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchGetCommerce: refetch });
};

export const getCommerce2GET = (Constants, { commerce }, handlers = {}) =>
  fetch(
    `https://suggest.taobao.com/sug?code=${encodeURIComponent(
      `utf-8`
    )}&q=${encodeURIComponent(
      `${
        typeof commerce === 'string' ? commerce : JSON.stringify(commerce ?? '')
      }`
    )}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  ).then(res => handleResponse(res, handlers));

export const useGetCommerce2GET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['todos', args],
    () => getCommerce2GET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchGetCommerce2GET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  commerce,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useGetCommerce2GET(
    { commerce },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchGetCommerce2: refetch });
};
