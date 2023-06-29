import { css, styled } from 'styled-components';
import { motion } from 'framer-motion';

import { Progressbar } from '../..';
import { dataStore } from '../../../store/dataStore';
import { Tooltip } from '../../../styles/TextStyles';
import { rem, sidebarMotion } from '../../../utils';

export const HardSkills = () => {
  const data = dataStore((state) => state.sidebar.skills.hard);

  return (
    <SkillsContainer className='art-hard-skills p-30-30' {...sidebarMotion.hardSkills.container}>
      {data.map((skill, index) => (
        <HardSkillsItem key={`sidebar-hardskill-item-${index}`} {...skill} index={index} />
      ))}
    </SkillsContainer>
  );
};

export const HardSkillsItem = (props) => (
  <ItemContainer className='art-hard-skills-item' $description={props.description} {...sidebarMotion.hardSkills.item}>
    <motion.span className='art-skill-heading' {...sidebarMotion.hardSkills.items}>
      {props.title}
    </motion.span>
    <Progressbar {...props} type='line' hide={true} {...sidebarMotion.hardSkills.items} />
  </ItemContainer>
);

const SkillsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${rem(15)};
`;

const ItemContainer = styled(Tooltip)`
  position: relative;
  color: var(--c-font-2);

  ${({ $description }) =>
    $description
      ? css`
          &::after {
            content: $description;
            top: -50%;
            right: 5%;
            max-width: 90%;
            transform: scale(0.75);
            transition-delay: 1s;
          }
        `
      : css`
          &::after,
          &::before {
            content: none;
          }
        `}
`;
