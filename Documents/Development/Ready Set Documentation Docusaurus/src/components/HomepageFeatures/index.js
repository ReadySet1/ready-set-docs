import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Logistics',
    Svg: require('@site/static/img/bg-hero.svg').default,
    description: (
      <>
        A short explanation how to ask for our services and how to get in touch with us.
      </>
    ),
    link: '/logistics', // Agrega aquí la URL deseada para Logística
  },
  {
    title: 'Virtual Assistant',
    Svg: require('@site/static/img/customer-service.svg').default,
    description: (
      <>
        The easiest way to learn how to contact our Virtual Assistant Agents, and we&apos;ll glad to help you.
      </>
    ),
    link: '/virtual-assistant', // Agrega aquí la URL deseada para Asistente Virtual
  },
  {
    title: 'Join the Team',
    Svg: require('@site/static/img/join-our-team.svg').default,
    description: (
      <>
        A quick shot how you can join us and be part of the best team.
      </>
    ),
    link: '/join-us', // Agrega aquí la URL deseada para Unirse al Equipo
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={link}> {/* Envolvemos el Svg con un elemento <a> */}
          <Svg className={styles.featureSvg} role="img" />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}