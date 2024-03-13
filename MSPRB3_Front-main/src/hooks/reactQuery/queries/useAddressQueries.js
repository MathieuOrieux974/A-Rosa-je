import { findAddressDetail } from '@api/GeocodingApi';
import { addressQKey } from '@stores/ReactQueryKEYS';
import { useQuery } from '@tanstack/react-query';

export const useAddressDetailQuery = (address, options) =>
  useQuery({
    ...options,
    queryKey: addressQKey.detail(address),
    queryFn: () => findAddressDetail(address)
  });
