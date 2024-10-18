import { FC } from 'react';
import { useSurveys } from '../lib/query-client/hooks/queries/survey.query';
import SurveyListItem from './SurveyListItem';

type SurveyListProps = {
  /** Company ID */
  companyId: string;
}

const SurveyList: FC<SurveyListProps> = ({ companyId }: SurveyListProps) => {
  const { data: surveys } = useSurveys(companyId!);

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {
        surveys?.map((survey) => (
          <SurveyListItem key={survey._id} companyId={ companyId } { ...survey } />
        ))
      }
    </div>
  );
}

export default SurveyList;
