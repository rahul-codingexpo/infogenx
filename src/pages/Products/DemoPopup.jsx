import "./DemoPopup.css";

const DemoPopup = ({ data, onClose }) => {
  return (
    <div className="demo-overlay" onClick={onClose}>
      <div className="demo-popup" onClick={(e) => e.stopPropagation()}>
        <div className="demo-header">{data.title}</div>

        <div className="demo-body">
          <a
            href={data.demo.loginUrl}
            target="_blank"
            rel="noreferrer"
            className="demo-link"
          >
            Click here for Application Login
          </a>

          <div className="demo-row">
            <span>Email Address</span>
            <span>{data.demo.email}</span>
          </div>

          <div className="demo-row">
            <span>Password</span>
            <span>{data.demo.password}</span>
          </div>
        </div>

        <div className="demo-footer">
          <button onClick={onClose}>CLOSE</button>
        </div>
      </div>
    </div>
  );
};

export default DemoPopup;
