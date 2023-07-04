import { SectionWrapper } from '../../';

export default SectionWrapper(({ project }) => {
  const { title, image, categories } = project;

  return (
    <>
      <SectionTitle title={title}>
        <Tag>{categories.join(', ')}</Tag>
      </SectionTitle>

      <div className='col-lg-12'>
        <div className='art-a art-project-cover'>
          <a data-fancybox='project' href={image} className='art-portfolio-item-frame art-horizontal'>
            <img src={image} alt={title} />
            <span className='art-item-hover'>
              <i className='fas fa-expand' />
            </span>
          </a>
        </div>
      </div>
    </>
  );
});