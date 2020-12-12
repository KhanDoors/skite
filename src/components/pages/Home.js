import React from "react";
import Navbar from "../layouts/Navbar";
import { motion } from "framer-motion";
import image1 from "../../utility/images/AIRobot.jpg";
import image2 from "../../utility/images/circle2.png";
import image3 from "../../utility/images/lightbulb2.png";
import image4 from "../../utility/images/itheart.png";
import { Parallax, Background } from "react-parallax";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: 500,
  },
  text1: {
    color: "#30F2F2",
    textAlign: "center",
    padding: "7em",
  },
  text2: {
    color: "#D9042B",
    textAlign: "center",
    padding: "3.5em",
  },
  content: {
    padding: "3.5em",
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <Navbar>
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -250 }}
        transition={{ duration: 0.5 }}
      >
        <Parallax bgImage={image1} strength={900}>
          <motion.div className={classes.root}>
            <Typography variant="h4" className={classes.text1}>
              Syyad Khan
            </Typography>
          </motion.div>
        </Parallax>
        <motion.div>
          <motion.h1 className={classes.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            repellendus. Possimus ab natus, facilis molestiae nostrum et harum
            aut nihil commodi amet impedit facere quaerat maiores perspiciatis
            exercitationem excepturi adipisci. Laborum hic ipsa similique,
            placeat maxime eligendi harum, nobis accusantium omnis tempore
            autem. Id, fugiat voluptatum quam cumque quas numquam est facere
            quibusdam soluta delectus ipsum! Exercitationem fuga harum velit?
            Inventore necessitatibus deserunt, distinctio ipsam expedita
            quibusdam rerum cupiditate optio hic commodi voluptas corrupti quae,
            pariatur minus, iure fugit debitis id placeat ullam omnis. Iure
            ducimus ad quidem quae accusamus. Optio modi dolorem facere ut
            error, corrupti libero illo rem, repellat ex nostrum maiores
            voluptates? Suscipit, earum? Sapiente, asperiores laudantium
            distinctio ad eaque laborum consequuntur odit quia, inventore
            dignissimos reiciendis. Quae deleniti quasi voluptatibus cupiditate,
            omnis nihil, ex dignissimos minus minima incidunt eveniet officiis
            necessitatibus a, harum porro voluptatem dicta esse eum aperiam
            quis. Molestias nihil in reprehenderit molestiae quo.
          </motion.h1>
        </motion.div>
        <Parallax
          bgImage={image4}
          strength={900}
          renderLayer={(percentage) => (
            <div
              style={{
                position: "absolute",
                width: "10%",
                height: "10%",
                borderRadius: "45%",
                background: `rgba(0,206,209, ${percentage * 0.75})`,
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) scale(${percentage * 7})`,
              }}
            ></div>
          )}
        >
          <motion.div className={classes.root}>
            <Typography variant="h2" className={classes.text2}>
              Portfolio
            </Typography>
          </motion.div>
        </Parallax>
        <motion.div>
          <motion.h1 className={classes.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            repellendus. Possimus ab natus, facilis molestiae nostrum et harum
            aut nihil commodi amet impedit facere quaerat maiores perspiciatis
            exercitationem excepturi adipisci. Laborum hic ipsa similique,
            placeat maxime eligendi harum, nobis accusantium omnis tempore
            autem. Id, fugiat voluptatum quam cumque quas numquam est facere
            quibusdam soluta delectus ipsum! Exercitationem fuga harum velit?
            Inventore necessitatibus deserunt, distinctio ipsam expedita
            quibusdam rerum cupiditate optio hic commodi voluptas corrupti quae,
            pariatur minus, iure fugit debitis id placeat ullam omnis. Iure
            ducimus ad quidem quae accusamus. Optio modi dolorem facere ut
            error, corrupti libero illo rem, repellat ex nostrum maiores
            voluptates? Suscipit, earum? Sapiente, asperiores laudantium
            distinctio ad eaque laborum consequuntur odit quia, inventore
            dignissimos reiciendis. Quae deleniti quasi voluptatibus cupiditate,
            omnis nihil, ex dignissimos minus minima incidunt eveniet officiis
            necessitatibus a, harum porro voluptatem dicta esse eum aperiam
            quis. Molestias nihil in reprehenderit molestiae quo.
          </motion.h1>
        </motion.div>
        <Parallax bgImage={image3} strength={1200}>
          <motion.div className={classes.root}>
            <Typography variant="h2" className={classes.text2}>
              Contact Me
            </Typography>
          </motion.div>
        </Parallax>
        <motion.div>
          <motion.h1 className={classes.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            repellendus. Possimus ab natus, facilis molestiae nostrum et harum
            aut nihil commodi amet impedit facere quaerat maiores perspiciatis
            exercitationem excepturi adipisci. Laborum hic ipsa similique,
            placeat maxime eligendi harum, nobis accusantium omnis tempore
            autem. Id, fugiat voluptatum quam cumque quas numquam est facere
            quibusdam soluta delectus ipsum! Exercitationem fuga harum velit?
            Inventore necessitatibus deserunt, distinctio ipsam expedita
            quibusdam rerum cupiditate optio hic commodi voluptas corrupti quae,
            pariatur minus, iure fugit debitis id placeat ullam omnis. Iure
            ducimus ad quidem quae accusamus. Optio modi dolorem facere ut
            error, corrupti libero illo rem, repellat ex nostrum maiores
            voluptates? Suscipit, earum? Sapiente, asperiores laudantium
            distinctio ad eaque laborum consequuntur odit quia, inventore
            dignissimos reiciendis. Quae deleniti quasi voluptatibus cupiditate,
            omnis nihil, ex dignissimos minus minima incidunt eveniet officiis
            necessitatibus a, harum porro voluptatem dicta esse eum aperiam
            quis. Molestias nihil in reprehenderit molestiae quo.
          </motion.h1>
        </motion.div>
      </motion.div>
    </Navbar>
  );
};

export default Home;
