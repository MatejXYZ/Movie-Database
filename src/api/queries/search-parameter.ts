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
  TitleSearchParams
} from '../models'



/**
 * @summary Returns an array of results for a given title
 */
export const titleSearch = (
    params: TitleSearchParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<void>> => {
    return axios.get(
      `/?s`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }


export const getTitleSearchQueryKey = (params: TitleSearchParams,) => [`/?s`, ...(params ? [params]: [])] as const;
  

    
export const getTitleSearchQueryOptions = <TData = Awaited<ReturnType<typeof titleSearch>>, TError = AxiosError<unknown>>(params: TitleSearchParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof titleSearch>>, TError, TData>, axios?: AxiosRequestConfig}
): UseQueryOptions<Awaited<ReturnType<typeof titleSearch>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getTitleSearchQueryKey(params);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof titleSearch>>> = ({ signal }) => titleSearch(params, { signal, ...axiosOptions });
    
      
      
   return  { queryKey, queryFn, ...queryOptions}}

export type TitleSearchQueryResult = NonNullable<Awaited<ReturnType<typeof titleSearch>>>
export type TitleSearchQueryError = AxiosError<unknown>

/**
 * @summary Returns an array of results for a given title
 */
export const useTitleSearch = <TData = Awaited<ReturnType<typeof titleSearch>>, TError = AxiosError<unknown>>(
 params: TitleSearchParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof titleSearch>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getTitleSearchQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

