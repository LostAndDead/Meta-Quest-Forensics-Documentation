import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import ThemedImage from '@theme/ThemedImage';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  lSvg: string;
  dSvg: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Data Extraction',
    lSvg: '/img/data-extraction_light.svg',
    dSvg: '/img/data-extraction_dark.svg',
    description: (
      <>
        Contains all the information and guidance you need to extract data from Meta Quest headsets as a hobbyist or professional.
      </>
    ),
  },
  {
    title: 'Data Analysis',
    lSvg: '/img/private-data_light.svg',
    dSvg: '/img/private-data_dark.svg',
    description: (
      <>
        Details and categorised information on how to analyse the extracted data from Meta Quest headsets as well as definitions for all the artifacts.
      </>
    ),
  },
  {
    title: 'Purpose',
    lSvg: '/img/goals_light.svg',
    dSvg: '/img/goals_dark.svg',
    description: (
      <>
        Built as a Dissertation project for my BSc in Applied Cyber Security, this documentation aims to provide a comprehensive guide to digital forensics of Meta Quest headsets for both hobbyists and professionals.
      </>
    ),
  },
];

function Feature({title, lSvg, dSvg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <ThemedImage
          className={styles.featureSvg}
          role="img"
          sources={{
            light: useBaseUrl(lSvg),
            dark: useBaseUrl(dSvg),
          }}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
