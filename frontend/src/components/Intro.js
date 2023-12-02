import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Intro = (props) => {
  const allCorrelations = props.allCorrelations;

  //   useEffect(() => {
  //     processGraduationData();
  //   }, [allCorrelations]);

  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        marginBottom: "20px",
        width: 1000,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      {/* <h2>
        {`What factors correlate with a school's/district's PSSA Scores?`}
      </h2> */}
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5">
            Research Question: What factors correlate with a school's/district's
            PSSA Scores?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            In the realm of educational assessment, PSSA scores serve as a
            crucial metric, offering insights into the academic performance and
            proficiency of students across Pennsylvania. However, understanding
            the multifaceted landscape that shapes these scores requires a
            nuanced exploration of the myriad factors at play. From classroom
            dynamics to community influences, a school or district's PSSA scores
            reflect not only the academic prowess of its students but also the
            intricate interplay of various elements. In this inquiry, we delve
            into the key factors that can influence PSSA outcomes, seeking to
            unravel the complex tapestry that defines educational achievement in
            the Keystone State.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h5">Strongest Correlations</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The factors that had the strongest correlation with PSSA scores:
            <br />
          </Typography>

          {allCorrelations ? (
            allCorrelations.slice(0, 5).map((el) => {
              return (
                <Typography key={`${el.Name}-coeff-display`}>
                  {formatCorrelation(el)}
                </Typography>
              );
            })
          ) : (
            <CircularProgress />
          )}

          <Typography>
            <br />
            Note: It is important to note that our analysis focuses on
            identifying correlations between various factors and PSSA scores
            rather than establishing causal relationships. While we can discern
            associations and patterns within the data, attributing causation
            requires a more intricate examination involving controlled
            experiments and rigorous methodologies beyond the scope of our
            current analysis. Correlation does not imply causation, and the
            observed relationships between different factors and PSSA scores
            should be interpreted with caution. Our aim is to contribute to a
            comprehensive understanding of the landscape surrounding educational
            performance, recognizing that multiple factors may act concurrently,
            influencing PSSA scores without necessarily being direct causes. As
            we navigate through the intricate web of educational dynamics, it
            becomes imperative to approach the identified correlations as
            indicators of potential associations rather than conclusive evidence
            of causative links.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
};

function formatCorrelation(corrElement) {
  return `${corrElement.Name}: ${corrElement.correlationCoefficient.toFixed(
    4
  )} `;
}

export default Intro;
