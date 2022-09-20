import './searchItem.css';

const SearchItem = () => {
  return (
    <div className='searchItem'>
      <img
        src='https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1'
        alt=''
        className='siImg'
      />
      <div className='siDesc'>
        <h1 className='siTitle'>Hotel Tavuk</h1>
        <span className='siDistance'>500m from kallai</span>
        <span className='siTaxiOp'>lathif</span>
        <span className='siSubtitle'>correct address</span>
        <span className='siFeatures'>10000 credit • 10 sales • 24 stock</span>
        <span className='siCancelOp'>Free cancellation </span>
        <span className='siCancelOpSubtitle'>always pays on time</span>
      </div>
      <div className='siDetails'>
        <div className='siRating'>
          <span></span>sales
          <button>89</button>
        </div>
        <div className='siDetailTexts'>
          <span className='siPrice'>rs112</span>
          <span className='siTaxOp'>Includes taxes and fees</span>
          <button className='siCheckButton'>view more</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
