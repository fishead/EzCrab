import { Schema, arrayOf } from 'normalizr';


export const showSchema = new Schema('shows', {
  idAttribute: 'id',
});

const BASE_ENDPOINT = 'http://52.68.80.237:17555/shows';

export function searchShows() {
  return {
    method: 'get',
    endpoint: BASE_ENDPOINT,
    schema: arrayOf(showSchema),
  };
}

export function fetchShow(showId) {
  return {
    method: 'get',
    endpoint: `${BASE_ENDPOINT}/${showId}`,
    schema: showSchema,
  };
}
