import { getResources } from '@/app/actions/resource/resource.action';
import BoyanShort from './components/boyanShort';

export const dynamic = 'force-dynamic';

const Boyan = async () => {
  const result = await getResources("boyans");

  if (!result.success) {
    return <p className="text-red-500">{result.message}</p>;
  }

  // 🔥 FIX HERE
  const safeData = result.data.map(item => ({
    ...item,
    _id: item._id.toString(), // convert ObjectId → string
  }));

  return <BoyanShort data={safeData} />;
};

export default Boyan;
