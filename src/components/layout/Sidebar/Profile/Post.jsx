import { dataStore } from '../../../../store/dataStore';

const Post = () => {
  const data = dataStore((state) => state.sidebar.profile);

  return (
    <div>
      {data.subtitle.map((s) => (
        <div key={s}>{s}</div>
      ))}
    </div>
  );
};
export default Post;
