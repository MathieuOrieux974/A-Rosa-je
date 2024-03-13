import { GeocodeClient } from './GeocodeClient';

const geocodeBaseUrl = '/geocode';

/**
 * Exemple for get by id request
 *
 * @param id exemple id
 * @returns A promise with the list of all exemples
 */
export const findAddressDetail = (address) =>
  GeocodeClient.get(`${geocodeBaseUrl}/search`, {
    params: {
      text: address
    }
  }).then((res) => res.data);
