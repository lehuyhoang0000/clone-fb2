import user1 from '../../../asset/Vector.svg';
import user2 from '../../asset/Vector 1.svg';
import user3 from '../../asset/Group.svg';
import user4 from '../../asset/../material-symbols_wallet-sharp.svg';
import user5 from '../../../asset/Vector 2.svg';
import user6 from '../../asset/Vector 3.svg';
import user7 from '../../asset/carbon_machine-learning-model.svg';
import lightBuldBg from '../../asset/Union-bg.svg';
import lightBuld from '../../asset/light bulb.svg';
import logout from '../../asset/logout.svg';
import search from '../../asset/search-normal.svg';
import notification from '../../asset/notification.svg';
import avatar from '../../asset/icon-fb/Lê Huy Hoàng.png';
import nivida from '../../asset/my stock/nivida.svg';
import meta from '../../asset/my stock/meta.svg';
import tesla from '../../asset/my stock/tesla.svg';
import amd from '../../asset/my stock/amd.svg';
import nividachart from '../../asset/my stock/nivida1.svg';
import metachart from '../../asset/my stock/meta chart.svg';
import teslachart from '../../asset/my stock/tesla chart.svg';
import apple from '../../asset/my stock/391px-Apple_logo_black 1.svg';
import amdchart from '../../asset/my stock/amd chart.svg';
import btnRight from '../../asset/my stock/arrow-right.svg';
import rightArrow from '../../asset/my stock/arrow-right2.svg';
import downArrow from '../../asset/my stock/arrow-down.svg';
import teslaMotor from '../../asset/my stock/tesla-motors-1 1.svg';
import chartInveted from '../../asset/my stock/chart inveted.svg';
import chartNasv from '../../asset/my stock/chart nasv.svg';
import chartViolet from '../../../asset/my stock/chart-por.svg';
import plus from '../../asset/my stock/plus.svg';
import amazon from '../../asset/my stock/amazon-icon-1 1.svg';
import coca from '../../asset/my stock/coca-cola-6 1.svg';
import bmw from '../../asset/my stock/bmw 1.svg';
import microsoft from '../../asset/my stock/microsoft 1.svg';
import service from '../../asset/my stock/service.svg';
import mastercard from '../../asset/my stock/mastercard-2 1.svg';
import './index.css';

export default function DashBroad() {
  return (
    <div id="body-DB" className="body-DashBroad">
      <div className="user-panel">
        <div className="title">
          <h1>Foxstocks</h1>
        </div>
        <div>
          <div>
            <h5>User Panel</h5>
          </div>
          <div className="dashBoard">
            <span className="fx-dashBoard">
              <img src={user1} alt="" />
              Dashboard
            </span>
          </div>
          <div className="dashBoard">
            <span className="fx-dashBoard">
              <img src={user2} alt="" />
              Portfolio
            </span>
          </div>
          <div className="dashBoard">
            <span className="fx-dashBoard">
              <img src={user3} alt="" />
              Trading & Market
            </span>
          </div>
          <div className="dashBoard">
            <span className="fx-dashBoard">
              <img src={user4} alt="" />
              Reasearch Portal
            </span>
          </div>
          <div className="dashBoard">
            <span className="fx-dashBoard">
              <img src={user5} alt="" />
              Wallet Transfer Pay
            </span>
          </div>
          <div className="dashBoard">
            <span className="fx-dashBoard">
              <img src={user6} alt="" />
              Reporting & Transaction
            </span>
          </div>
          <div className="dashBoard">
            <span className="fx-dashBoard">
              <img src={user7} alt="" />
              Tutorial
            </span>
          </div>
        </div>
        <div className="header-light">
          <div className="light-buld">
            <img src={lightBuld} alt="" />
          </div>
          <div className="light-title">
            <img src={lightBuldBg} alt="" />
            <p className="pTime">Thoughts Time</p>
            <p>
              If you aren’t willing to own a stock for 10 years, don’t even think about owning it
              for 10 minutes.
            </p>
          </div>
        </div>
        <div className="logout">
          <img src={logout} alt="" />
          <button className="btn-logout">
            <h4>Logout</h4>
          </button>
        </div>
      </div>
      <div className="body-stock">
        <div className="hello-title">
          <div>
            <h3>Hello Mart,</h3>
          </div>
          <div className="hello-search">
            <label className="lb-img" htmlFor="">
              <img className="img-search" src={search} alt="" />
              <input type="text" placeholder="Search for stocks and more " />
            </label>
            <img className="notification-img" src={notification} alt="" />
            <a href="">
              <img className="img-user" src={avatar} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-stock">
          <div className="footer-stock-title">
            <h3>My stock</h3>
          </div>
          <div className="bg-blue">
            <div className="nivida">
              <div className="nivida-header">
                <div className="nivida-name">
                  <div className="nivia-name-img">
                    <img src={nivida} alt="" />
                  </div>
                  <div>
                    <h3>Nvidia</h3>
                  </div>
                </div>
                <div className="nivida-money">
                  <h3>NVDA</h3>
                  <span>+5.63</span>
                </div>
              </div>
              <div className="nivida-footer">
                <div className="nivida-footer-money">
                  <span>Current Value</span>
                  <h3>$203.65</h3>
                </div>
                <div className="nivida-footer-chart">
                  <img src={nividachart} alt="" />
                </div>
              </div>
            </div>
            <div className="nivida meta">
              <div className="nivida-header">
                <div className="nivida-name">
                  <div className="nivia-name-img">
                    <img src={meta} alt="" />
                  </div>
                  <div>
                    <h3>Meta</h3>
                  </div>
                </div>
                <div className="nivida-money meta-money">
                  <h3>META</h3>
                  <span>-4.44</span>
                </div>
              </div>
              <div className="nivida-footer">
                <div className="nivida-footer-money meta-footer-money">
                  <span>Current Value</span>
                  <h3>$151.74</h3>
                </div>
                <div className="nivida-footer-chart">
                  <img src={metachart} alt="" />
                </div>
              </div>
            </div>
            <div className="nivida tesla">
              <div className="nivida-header">
                <div className="nivida-name">
                  <div className="nivia-name-img">
                    <img src={tesla} alt="" />
                  </div>
                  <div>
                    <h3>Tesla Inc</h3>
                  </div>
                </div>
                <div className="nivida-money">
                  <h3>TSLA</h3>
                  <span>+17.63</span>
                </div>
              </div>
              <div className="nivida-footer">
                <div className="nivida-footer-money">
                  <span>Current Value</span>
                  <h3>$177.90</h3>
                </div>
                <div className="nivida-footer-chart">
                  <img src={teslachart} alt="" />
                </div>
              </div>
            </div>
            <div className="nivida apple">
              <div className="nivida-header">
                <div className="nivida-name">
                  <div className="nivia-name-img">
                    <img src={apple} alt="" />
                  </div>
                  <div>
                    <h3>Apple Inc</h3>
                  </div>
                </div>
                <div className="nivida-money">
                  <h3>AAPL</h3>
                  <span>+23.41</span>
                </div>
              </div>
              <div className="nivida-footer">
                <div className="nivida-footer-money">
                  <span>Current Value</span>
                  <h3>$145.93</h3>
                </div>
                <div className="nivida-footer-chart">
                  <img src={teslachart} alt="" />
                </div>
              </div>
            </div>
            <div className="nivida amd">
              <div className="nivida-header">
                <div className="nivida-name">
                  <div className="nivia-name-img">
                    <img src={amd} alt="" />
                  </div>
                  <div className="amd-title">
                    <h3>Advanced</h3>
                  </div>
                </div>
                <div className="nivida-money">
                  <h3>AMD</h3>
                  <span>+5.63</span>
                </div>
              </div>
              <div className="nivida-footer">
                <div className="nivida-footer-money">
                  <span>Current Value</span>
                  <h3>$75.40</h3>
                </div>
                <div className="nivida-footer-chart">
                  <img src={amdchart} alt="" />
                </div>
              </div>
            </div>
            <button className="btn-right">
              <img src={btnRight} alt="" />
            </button>
          </div>
          <div>
            <div className="balance-mt">
              <div className="balance">
                <div className="balance-header">
                  <div className="">
                    <div className="">
                      <p>Balance</p>
                    </div>
                    <div className="balance-header-btn">
                      <button className="btn-dola">$14,032.56</button>
                      <button className="btn-per"> +5.63%</button>
                    </div>
                  </div>
                  <div className="invested">
                    <div className="invested-title">
                      <p>Invested</p>
                    </div>
                    <div className="invested-btn">
                      <button className="invested-btn-number">$7,532.21</button>
                      <button className="btn">
                        <img src={rightArrow} alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="top-stock">
                    <div>
                      <p>Top Stock</p>
                    </div>
                    <div>
                      <div className="stock-tesla">
                        <div className="stock-tesla-img">
                          <img src={teslaMotor} alt="" />
                          Tesla Inc
                        </div>
                        <div className="stock-tesla-span">
                          <span>TSLA</span>
                          <span>+17.63</span>
                        </div>
                      </div>
                      <div className="flex-value-invested">
                        <div className="flex-value">
                          <span>Invested Value</span>
                          <span>$29.34</span>
                        </div>
                        <div className="flex-value">
                          <span>Current Value</span>
                          <span>$29.34</span>
                        </div>
                        <div className="flex-value">
                          <img src={chartInveted} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="down-btn">
                      <span>
                        <button className="btn-flex">
                          <img src={downArrow} alt="" />
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="balance">
                <div className="balance-header">
                  <div className="btn-exchanges">
                    <button className="btn-exchanges-click">NASDAQ</button>
                    <button className="btn-exchanges-click">SSE</button>
                    <button className="btn-exchanges-click">Euronext</button>
                    <button className="btn-exchanges-click">BSE</button>
                  </div>
                </div>
                <div className="balance-header">
                  <div className="btn-exchanges-year">
                    <button className="btn-year">1D</button>
                    <div className="scribble"></div>
                    <button className="btn-year">5D</button>
                    <div className="scribble"></div>
                    <button className="btn-year">1M</button>
                    <div className="scribble"></div>
                    <button className="btn-year">6M</button>
                    <div className="scribble"></div>
                    <button className="btn-year">1Y</button>
                  </div>
                </div>
                <div className="chart-nasv">
                  <div className="chart-number">
                    <span>11,700</span>
                    <span>11,650</span>
                    <span>11,600</span>
                    <span>11,550</span>
                  </div>
                  <div>
                    <img src={chartNasv} alt="" />
                  </div>
                </div>
                <div className="chart-time">
                  <span className="time">12 am</span>
                  <span className="time">11 am</span>
                  <span className="time">10 am</span>
                </div>
                <div className="high-open">
                  <div className="high">
                    <span>High</span>
                    <span>11,691.89</span>
                  </div>
                  <div className="high">
                    <span>Prev close (Avr 28 Days)</span>
                    <span>11,512.41</span>
                  </div>
                </div>
                <div className="high-open">
                  <div className="high">
                    <span>Low</span>
                    <span>11,470.47</span>
                  </div>
                  <div className="high">
                    <span>Open</span>
                    <span>11,690.11</span>
                  </div>
                </div>
              </div>
              <div className="balance">
                <div className="balance-header">
                  <div className="btn-exchanges">Snapshot</div>
                </div>
                <div className="balance-header">
                  <div className="snap-open">
                    <div className="high snap-high">
                      <span>Prev Close</span>
                      <span>12,051.48</span>
                    </div>
                    <div className="high">
                      <span>Open</span>
                      <span>12.000.21</span>
                    </div>
                  </div>
                </div>
                <div className="line-blue"></div>
                <div className="high-open-snap">
                  <div className="high">
                    <span>11,999.87</span>
                    <span>Day Low</span>
                  </div>
                  <div className="high">
                    <span>12,248.15</span>
                    <span>Day High</span>
                  </div>
                </div>
                <div className="line-pink">
                  <div className="line-black"></div>
                  <div className="line-black-number">12.166.60</div>
                </div>
                <div className="high-open-snap snap-after">
                  <div className="high">
                    <span>10,440.64</span>
                    <span>52 Week Low</span>
                  </div>
                  <div className="high">
                    <span>15,265.42</span>
                    <span>52 Week High </span>
                  </div>
                </div>
                <div className="line-pink">
                  <div className="line-black"></div>
                  <div className="line-black-number">12.166.60</div>
                </div>
                <div className="line-blue blue-after"></div>
                <div className="snap-trade-time">
                  <div className="trade-time">
                    <div className="mb-4">Trade Time</div>
                    <div>05:16 PM</div>
                  </div>
                  <div>
                    <div className="mb-4">Trade Date</div>
                    <div>01/27/23</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-por-watch">
            <div className="portfoio">
              <div className="portfoio-header">
                <div>Portfolio Analytics</div>
                <div className="balance-header por-time">
                  <div className="btn-exchanges-year">
                    <button className="btn-year">1D</button>
                    <div className="scribble"></div>
                    <button className="btn-year">5D</button>
                    <div className="scribble"></div>
                    <button className="btn-year">1M</button>
                    <div className="scribble"></div>
                    <button className="btn-year">6M</button>
                    <div className="scribble"></div>
                    <button className="btn-year">1Y</button>
                    <div className="scribble"></div>
                    <button className="btn-year">5Y</button>
                    <div className="scribble"></div>
                    <button className="btn-year">Max</button>
                  </div>
                </div>
              </div>
              <div className="chart-money">
                <div className="chart-violet">
                  <img src={chartViolet} alt="" />
                </div>
                <div className="money-violet">
                  <span>$15000</span>
                  <span>$12000</span>
                  <span>$9000</span>
                  <span>$6000</span>
                  <span>$3000</span>
                  <span>0</span>
                </div>
              </div>
              <div className="por-time-violet">
                <span>10 am</span>
                <span>11 am</span>
                <span>12 pm</span>
                <span>12 pm</span>
                <span>12 pm</span>
                <span>12 pm</span>
              </div>
            </div>
            <div className="watchlish">
              <div className="watchlish-btn">
                <div>Watchlist</div>
                <button className="plus">
                  <img src={plus} alt="" />
                </button>
              </div>
              <div className="watch-Investors">
                <div className="amazon">
                  <div className='db-flex'>
                    <img src={amazon} alt="" />
                    <div className="amazon-name">
                      <span>Amazon.com, Inc. </span>
                      <span>AMZN</span>
                    </div>
                  </div>
                  <div className="amzon-money">
                    <span>$102.24</span>
                    <span>+3.02</span>
                  </div>
                </div>
                <div className="amazon">
                  <div className='db-flex'>
                    <img src={coca} alt="" />
                    <div className="amazon-name">
                      <span>Coca-Cola Co </span>
                      <span>KO </span>
                    </div>
                  </div>
                  <div className="amzon-money coca-money">
                    <span>$60.49</span>
                    <span>−0.32</span>
                  </div>
                </div>
                <div className="amazon">
                  <div className='db-flex'>
                    <img src={bmw} alt="" />
                    <div className="amazon-name">
                      <span>Bayerische Motoren Werke AG </span>
                      <span>BMW</span>
                    </div>
                  </div>
                  <div className="amzon-money">
                    <span>$92.94</span>
                    <span>+0.59</span>
                  </div>
                </div>
                <div className="amazon">
                  <div className='db-flex'>
                    <img src={microsoft} alt="" />
                    <div className="amazon-name">
                      <span>Microsoft Corp </span>
                      <span>MSFT</span>
                    </div>
                  </div>
                  <div className="amzon-money">
                    <span>$248.16</span>
                    <span>+0.16</span>
                  </div>
                </div>
                <div className="amazon">
                  <div className='db-flex'>
                    <img src={service} alt="" />
                    <div className="amazon-name">
                      <span>United Parcel Service, Inc. </span>
                      <span>UPS</span>
                    </div>
                  </div>
                  <div className="amzon-money">
                    <span>$182.09</span>
                    <span>+2.39</span>
                  </div>
                </div>
                <div className="amazon">
                  <div className='db-flex'>
                    <img src={mastercard} alt="" />
                    <div className="amazon-name">
                      <span>Mastercard Inc </span>
                      <span>MA</span>
                    </div>
                  </div>
                  <div className="amzon-money service-money">
                    <span>$374.03</span>
                    <span>−3.21</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
