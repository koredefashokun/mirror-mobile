import { mirrorQL } from './graphql';
import fetchPublication from '../queries/fetch-publication';

export const getPublication = async (domain: string) => {
  const {
    data: { publication, publicationContributors: contributors },
  } = await mirrorQL.query({
    query: fetchPublication,
    variables: { publication: domain },
  });

  return { publication, contributors };
};
