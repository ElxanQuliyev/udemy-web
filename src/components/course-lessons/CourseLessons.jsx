import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import "./course-lessons.scss";
export default function CourseLessons({ lessons }) {
  const [expanded, setExpanded] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const [currentUrl, setCurrentUrl] = React.useState("");
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      {modal && (
        <div className="my-modal">
          <div className="close-modal" onClick={()=>setModal(false)}>
            <CloseIcon fontSize="large" />
          </div>
          <iframe src={`https://www.youtube.com/embed/${currentUrl}`}  allowFullScreen title="video"></iframe>
        </div>
      )}

      {lessons?.map((ls) => (
        <Accordion
          key={ls.lessonId}
          expanded={expanded === `panel${ls.lessonId}`}
          onChange={handleChange(`panel${ls.lessonId}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <h6>
              {ls.name}
            </h6>
          </AccordionSummary>
          <AccordionDetails>
              {ls.lessonVideos?.map((video) => (
                <div key={ls.lessonId}>
                  <div onClick={()=>{
                     setModal(c=>!c)
                     setCurrentUrl(video.videoURl)
                     }} className="d-flex align-items-center">
                    <img
                      width={"40%"}
                      height={180}
                      style={{ objectFit: "cover" }}
                      src={`https://img.youtube.com/vi/${video.videoURl}/hqdefault.jpg`}
                      alt="sekil"
                    />
                    <h4 className="m-5">{video.name}</h4>
                  </div>
                </div>
              ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
