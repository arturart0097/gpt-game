import Content from "@/assets/icons/content.svg";
import Back from "@/assets/icons/back.svg";
import Next from "@/assets/icons/next.svg";

import { useParams, useLocation, useNavigate } from "react-router-dom";
import { allHeros } from "@/entities/heroes";
import { factions } from "@/entities/factions";
import "./style.css";
import { Header } from "@/components/Header";

function DetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  let data = location.state;

  let isFact = location.pathname.includes("/fact");
  let source = isFact ? factions : allHeros;

  if (!data) {
    data = source.find((item) => String(item.id) === String(id));
  }

  if (!data) return <div>Not found</div>;

  return (
    <div className="bg">
      <Header />
      <div className="content">
        <div className="image-content">
          <img src={data.img} alt="icon" />
          <div className="content-list">
            <div className="title">
              <img src={Content} />
              <h3>Contents</h3>
            </div>
            <hr />
            <ul>
              {data.contents && data.contents.length > 0 ? (
                data.contents.map((item, idx) => (
                  <li key={idx} className={`${idx === 0 ? "select" : ""}`}>
                    {item.title}
                    {item.children && (
                      <ul style={{ color: "#fff", marginTop: 10 }}>
                        {item.children.map((sub, subIdx) => (
                          <li key={subIdx}>{sub}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))
              ) : (
                <li style={{ color: "#fff" }}>No contents available</li>
              )}
            </ul>
          </div>
        </div>
        <div className="content-text">
          <h1>{data.name}</h1>
          <p>{data.summary}</p>
          {isFact ? (
            <>
              <h3>Summary</h3>
              <span>{data.summaryText}</span>
              <br />
              <br />
              <hr />
              <h3>Environment Summary</h3>
              <span>{data.envSummary}</span>
              <br />
              <br />
              <hr />
              <h3>Technology Summary</h3>
              <span>{data.techSummary}</span>
              <div className="nav-buttons">
                <div className="button" onClick={() => navigate(data.back.nav)}>
                  <img src={Back} alt="back" />
                  <span>{data.back.text}</span>
                </div>
                <div className="button" onClick={() => navigate(data.next.nav)}>
                  <span>{data.next.text}</span>
                  <img src={Next} alt="next" />
                </div>
              </div>
            </>
          ) : (
            <span dangerouslySetInnerHTML={{ __html: data.text }} />
          )}
          <br />
          <br />
          <hr />
          {isFact && (
            <>
              <br />
              <hr />
              <br />
              <hr />
              <br />
              <hr />
              <br />
              <hr />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
