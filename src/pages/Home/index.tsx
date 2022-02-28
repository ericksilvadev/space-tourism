import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Container, Content } from './styles';

export const Home = () => {
  const btnVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 1, delay: 1 },
    },
  };

  const headingVariants = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <Container>
      <Content>
        <div className="heading">
          <motion.h5
            variants={headingVariants}
            initial="initial"
            animate="animate"
            exit="initial"
            transition={{ duration: 0.8 }}
          >
            So, you want to travel to
          </motion.h5>
          <motion.h1
            variants={headingVariants}
            initial="initial"
            animate="animate"
            exit="initial"
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Space
          </motion.h1>

          <motion.p
            variants={headingVariants}
            initial="initial"
            animate="animate"
            exit="initial"
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Let’s face it; if you want to go to space, you might as well genuinely go to
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we’ll give you a truly out of this world experience!
          </motion.p>
        </div>

        <Link to="/destination">
          <motion.button
            variants={btnVariants}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            type="button"
          >
            Explore
          </motion.button>
        </Link>
      </Content>
    </Container>
  );
};
