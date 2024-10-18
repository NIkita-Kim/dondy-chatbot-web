import { FC } from 'react';
import { useParams } from 'react-router-dom';
import SurveyList from '../components/SurveyList';

const Surveys: FC = () => {
  const { id } = useParams();

  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Surveys</h2>
      { id && <SurveyList companyId={id} /> }
    </>
  );
}

export default Surveys
