'use client';

import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { SectionWrapper, SectionTitle, HoverExpand } from '@/components';
import { Tag } from '@/styles';
import { projectMotion } from '@/utils';

export default SectionWrapper(({ project }) => {
  const { title, image, categories } = project;

  return (
    <>
      <SectionTitle title={title}>
        <Tag {...projectMotion.banner.category}>{categories.join(', ')}</Tag>
      </SectionTitle>

      <Container className='col-lg-12 art-a art-project-cover' {...projectMotion.banner.thumbnail}>
        <a data-fancybox='project' href={image} className='art-portfolio-item-frame art-horizontal'>
          <img src={image} alt={title} />
          <HoverExpand />
        </a>
      </Container>
    </>
  );
});

const Container = styled(motion.div)`
  position: relative;
  /* margin-bottom: 30px; */
  box-shadow: 0 3px 8px 0 var(--c-box-shadow);
  overflow: hidden;
`;
