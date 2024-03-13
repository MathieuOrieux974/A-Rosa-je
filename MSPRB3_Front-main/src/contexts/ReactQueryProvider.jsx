import {MutationCache, QueryCache, QueryClient, QueryClientProvider} from '@tanstack/react-query';
import handleErrors from '@utils/errors/handleErrors';
import PropTypes from 'prop-types';
import {useMemo} from 'react';

/** Define component props */
ReactQueryProvider.propTypes = {
    children: PropTypes.array.isRequired
};

/** Setup handle error for all request */
const mutationCache = new MutationCache({
    onError: handleErrors
});

/** Setup handle error for all request */
const queryCache = new QueryCache({
    onError: handleErrors
});

/** Component used to handle the react query configuration and tools */
export function ReactQueryProvider({children}) {
    const queryClient = useMemo(
        () =>
            new QueryClient({
                mutationCache,
                queryCache
            }),
        []
    );

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}
