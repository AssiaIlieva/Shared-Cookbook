import { useModal } from '../../contexts/ModalContext';
import { useGetAllTips } from '../../hooks/useTips';
import TipCard from '../tipCard/TipCard';

export default function Tips() {
  const { openModal } = useModal();
  const { tips, error, loading } = useGetAllTips();

  if (loading) {
    return (
      <div className="panel-wrapper" style={{ marginTop: '100px' }}>
        <h1
          style={{
            textAlign: 'center',
            color: '#414141',
            backgroundColor: '#cf9359',
            padding: '20px',
            borderRadius: '5px',
          }}>
          Loading...
        </h1>
      </div>
    );
  }

  if (error) {
    openModal(<div>{error}</div>);
    return null;
  }

  return (
    <div className="page-wrap">
      <div className="page-wrapper">
        <div className="primary-content">
          <div className="panel">
            {tips.length > 0 ? (
              <div className="title">
                <h1 style={{ fontSize: 36, marginTop: 40 }}>check our tips - Become a real chef</h1>
              </div>
            ) : (
              <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '34px' }}>No tips are available yet</h1>
            )}
          </div>
          <div className="marginTop">
            {tips.map((tip) => (
              <TipCard key={tip._id} {...tip} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
