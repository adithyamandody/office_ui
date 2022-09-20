import {
  faBed,
  faCalendarDays,
  faBook,
  faPerson,
  faReceipt,
  faHandshakeAngle,
  faMoneyBill1Wave,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const Header = ({ type }) => {
  const [destination, setDestination] = useState('');
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    credit: 1,
    sales: 0,
    stock: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate('/hotels', { state: { destination, date, options } });
  };

  return (
    <div className='header'>
      <div
        className={
          type === 'list' ? 'headerContainer listMode' : 'headerContainer'
        }
      >
        <div className='headerList'>
          <div className='headerListItem active'>
            <FontAwesomeIcon icon={faHandshakeAngle} />
            <span>Party</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faMoneyBill1Wave} />
            <span>Sale</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faReceipt} />
            <span>Reciept</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faBook} />
            <span>Daybook</span>
          </div>
        </div>
        {type !== 'list' && (
          <>
            {/* <h1 className='headerTitle'>adasdas</h1>
            <p className='headerDesc'>
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            <button className='headerBtn'>Sign in / Register</button> */}
            <div className='headerSearch'>
              <div className='headerSearchItem'>
                <FontAwesomeIcon
                  icon={faHandshakeAngle}
                  className='headerIcon'
                />
                <input
                  type='text'
                  placeholder='Choose Party'
                  className='headerSearchInput'
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className='headerSearchText'
                >{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
                  date[0].endDate,
                  'MM/dd/yyyy'
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className='date'
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className='headerSearchText'
                >{`${options.credit} Credit · ${options.sales} Sales · ${options.stock} Stock`}</span>
                {openOptions && (
                  <div className='options'>
                    <div className='optionItem'>
                      <span className='optionText'>Credit</span>
                      <div className='optionCounter'>
                        <button
                          disabled={options.credit <= 1}
                          className='optionCounterButton'
                          onClick={() => handleOption('credit', 'd')}
                        >
                          -
                        </button>
                        <span className='optionCounterNumber'>
                          {options.credit}
                        </span>
                        <button
                          className='optionCounterButton'
                          onClick={() => handleOption('credit', 'i')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className='optionItem'>
                      <span className='optionText'>Sales</span>
                      <div className='optionCounter'>
                        <button
                          disabled={options.sales <= 0}
                          className='optionCounterButton'
                          onClick={() => handleOption('sales', 'd')}
                        >
                          -
                        </button>
                        <span className='optionCounterNumber'>
                          {options.sales}
                        </span>
                        <button
                          className='optionCounterButton'
                          onClick={() => handleOption('sales', 'i')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className='optionItem'>
                      <span className='optionText'>Stock</span>
                      <div className='optionCounter'>
                        <button
                          disabled={options.stock <= 1}
                          className='optionCounterButton'
                          onClick={() => handleOption('stock', 'd')}
                        >
                          -
                        </button>
                        <span className='optionCounterNumber'>
                          {options.stock}
                        </span>
                        <button
                          className='optionCounterButton'
                          onClick={() => handleOption('stock', 'i')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className='headerSearchItem'>
                <button className='headerBtn' onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
