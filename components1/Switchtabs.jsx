import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import GroupExample from './Features';
import ChequeStepper from './Howwork';

function ControlledTabsExample() {
  const [key, setKey] = useState('Features');

  return (
    <>
      <Tabs
        defaultActiveKey="Features"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        id="justify-tab-example"
        className="custom-tabs mb-3"
        justify
      >
        <Tab eventKey="Features" title="Features">
          <div className="tab-content-wrapper">
            <GroupExample />
          </div>
        </Tab>
        <Tab eventKey="ChequeStepper" title="How It Works">
          <div className="tab-content-wrapper">
            <ChequeStepper />
          </div>
        </Tab>
      </Tabs>

      <style jsx="true">{`
        .tab-content-wrapper {
          min-height: 60vh;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(to bottom right, #f4f6f9, #e3e9f0);
          border-radius: 8px;
        }

        .custom-tabs .nav-tabs {
          background-color: transparent;
          border-radius: 5px;
        }

        .custom-tabs .nav-link {
          color: #17153B;
          font-weight: bold;
        }

        .custom-tabs .nav-link.active {
          color: #17153B;
          background-color: #f39c12;
          border: none;
        }

        .custom-tabs .nav-link:hover {
          color: #17153B;
        }
      `}</style>
    </>
  );
}

export default ControlledTabsExample;