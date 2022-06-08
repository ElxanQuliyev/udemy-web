import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CourseLessons({ lessons }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
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
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {ls.name}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>I</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {ls.lessonVideos?.map((video) => (
              <>
               {/* <iframe width={300} height={300} src={`https://www.youtube.com/embed/${video.videoURl}`} frameborder="0" allowFullScreen title="video"></iframe> */}
              <div className="d-flex align-items-center">
                  <img
                    width={"40%"}
                    height={180}
                    style={{objectFit:"cover",}}
                    src={`https://img.youtube.com/vi/${video.videoURl}/hqdefault.jpg`}
                   alt="sekil"/>
                  <h4 className="m-5">{video.name}</h4>
                </div>
                </>
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
