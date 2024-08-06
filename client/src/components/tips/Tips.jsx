import { useState } from 'react';
import { useModal } from '../../contexts/ModalContext';
import { useGetAllTips, useSearchTips } from '../../hooks/useTips';
import TipCard from '../tipCard/TipCard';

export default function Tips() {
  const { openModal } = useModal();
  const { tips: allTips, error: allTipsError, loading: allTipsLoading } = useGetAllTips();
  const [selectedTipType, setSelectedTipType] = useState('');
  const { tips: searchedTips, error: searchError, loading: searchLoading } = useSearchTips(selectedTipType);

  const handleSearch = (event) => {
    event.preventDefault();
    setSelectedTipType(event.target.tipType.value);
  };

  if (allTipsLoading || searchLoading) {
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

  if (allTipsError || searchError) {
    openModal(<div>{allTipsError || searchError}</div>);
    return null;
  }

  const displayedTips = selectedTipType ? searchedTips : allTips;

  return (
    <div className="page-wrap">
      <div>
        {allTips.length > 0 ? (
          <h1 style={{ fontSize: '36px', marginLeft: '700px', marginTop: '40px' }}>Discover Our Tips and Master the Art of Cooking!</h1>
        ) : (
          <h1 style={{ fontSize: '36px', textAlign: 'center', marginTop: '40px' }}>No tips are available yet</h1>
        )}
      </div>
      <div className="page-wrapper">
        <div className="primary-content">
          <div style={{ margin: '0 auto', width: '30%' }}>
            <div className="search-panel">
              <div className="content">
                <div className="title">
                  <h1>Search Tips by Type</h1>
                </div>
                <div className="border"></div>
                <h2>Find tips here...</h2>
                <div className="searchbox">
                  <form onSubmit={handleSearch}>
                    <select id="tipType" name="tipType" className="input">
                      <option value="">Select Tip Type</option>
                      <option value="Kitchen hacks">Hack</option>
                      <option value="Cooking Techniques">Technique</option>
                    </select>
                    <div className="button">
                      <button
                        type="submit"
                        style={{
                          border: 'none',
                          backgroundColor: '#cf9359',
                          color: 'transparent', // Make text invisible
                          padding: '10px 20px',
                          cursor: 'pointer',
                          width: '40px', // Adjust width to fit the icon
                          height: '40px', // Adjust height to fit the icon
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '0px', // Remove border radius
                        }}>
                        {/* Use a magnifying glass icon */}
                        <i className="fa fa-search" aria-hidden="true" style={{ color: 'white' }}></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="panel-wrapper">
            {displayedTips.map((tip) => (
              <TipCard key={tip._id} {...tip} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
