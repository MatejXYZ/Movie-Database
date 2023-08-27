/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * OMDb API
 * This API requires authorization, you can get a free key here: [http://omdbapi.com/apikey.aspx](http://omdbapi.com/apikey.aspx)
 * OpenAPI spec version: 1.0
 */
import type { GetIdPlot } from './getIdPlot';
import type { GetIdR } from './getIdR';

export type GetIdParams = {
/**
 * A valid IMDb ID (e.g. tt0000001)
 */
i: string;
/**
 * Return short or full plot
 */
plot?: GetIdPlot;
/**
 * The response type to return
 */
r?: GetIdR;
/**
 * JSONP callback name
 */
callback?: string;
};
