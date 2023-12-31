import Exchange from '../api/Exchange';
import MainSummary from '../components/MainSummary.tsx';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div className=" flex flex-col items-center px-0 overflow-hidden">
      <p className="pt-3 pb-2 text-xl	font-semibold	">Your Stock Evaluation</p>
      <div className=" h-96 mb-1">
        <Link to={'/detail/'}>
          <MainSummary />
        </Link>
      </div>

      <p className="pt-16 pb-2 text-xl font-semibold">Realtime Exchange Rate</p>
      <Exchange />
    </div>
  );
}
