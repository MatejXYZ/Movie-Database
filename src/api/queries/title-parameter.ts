/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * OMDb API
 * This API requires authorization, you can get a free key here: [http://omdbapi.com/apikey.aspx](http://omdbapi.com/apikey.aspx)
 * OpenAPI spec version: 1.0
 */
import axios from 'axios'
import type {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios'
import {
  useQuery
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  QueryFunction,
  UseQueryResult,
  QueryKey
} from '@tanstack/react-query'
import type {
  GetTitleParams
} from '../models'



/**
 * @summary Returns the most popular match for a given title
 */
export const getTitle = (
    params: GetTitleParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<void>> => {
    return axios.get(
      `/?t`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }


export const getGetTitleQueryKey = (params: GetTitleParams,) => [`/?t`, ...(params ? [params]: [])] as const;
  

    
export const getGetTitleQueryOptions = <TData = Awaited<ReturnType<typeof getTitle>>, TError = AxiosError<unknown>>(params: GetTitleParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getTitle>>, TError, TData>, axios?: AxiosRequestConfig}
): UseQueryOptions<Awaited<ReturnType<typeof getTitle>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetTitleQueryKey(params);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getTitle>>> = ({ signal }) => getTitle(params, { signal, ...axiosOptions });
    
      
      
   return  { queryKey, queryFn, ...queryOptions}}

export type GetTitleQueryResult = NonNullable<Awaited<ReturnType<typeof getTitle>>>
export type GetTitleQueryError = AxiosError<unknown>

/**
 * @summary Returns the most popular match for a given title
 */
export const useGetTitle = <TData = Awaited<ReturnType<typeof getTitle>>, TError = AxiosError<unknown>>(
 params: GetTitleParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getTitle>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetTitleQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}
