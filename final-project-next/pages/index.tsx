import { useRouter } from 'next/router';
import styles from '@/styles/showcase.module.css';
import { Widget } from '@/components/Widget';


const Homepage: React.FC = () => {

  const router = useRouter();

  const handleComponentsButtonClick = () => {
    router.push('../components');
  };
  const handleShowcasesButtonClick = () => {
    router.push('../showcase');
  };

  return (
    <div className={styles.container}>

      <div className={styles.heading}>
        <h1 className={styles.title}>A0</h1>
        <h1 className={styles.subtitle}>placeholder</h1>
      </div>
      <div className={styles.containerWidget}>

        <Widget
          title="Explore Components"
          description="All the components you need for cohesive, efficient design."
          onButtonClick={handleComponentsButtonClick}
          buttonLabel="See more"
        />

        <Widget
          title="Showcase demo"
          description="Experience our components in real-time with interactive demos."
          onButtonClick={handleShowcasesButtonClick}
          buttonLabel="Let's begin"
        />
        
      </div>
    </div>
  );
};

export default Homepage;
