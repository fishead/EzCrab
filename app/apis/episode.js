import { Schema, arrayOf } from 'normalizr';


export const episodeSchema = new Schema('episodes', {
  idAttribute: 'id',
});

const BASE_ENDPOINT = 'http://52.68.80.237:17555/shows';

export function searchEpisodes(show) {
  return {
    method: 'get',
    endpoint: `${BASE_ENDPOINT}/${show.id}/episodes`,
    schema: arrayOf(episodeSchema),
  };
}

export function fetchEpisode(show, episodeId) {
  return {
    method: 'get',
    endpoint: `${BASE_ENDPOINT}/${show.id}/episodes/${episodeId}`,
    schema: episodeSchema,
  };
}
