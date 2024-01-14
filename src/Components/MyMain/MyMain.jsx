import classes from "./MyMain.module.scss";

import samurai from "/samurai.jpg";
import lion from "/lion.jpg";
import bitcoin from "/bitcoin.png";

// icons
import html from "/html.svg";
import css from "/css.svg";
import javascript from "/javascript.svg";

import Tabs from "./Tabs/Tabs";
import Tab from "./Tab/Tab";
import TabContentWrapper from "./TabContent/TabContentWrapper";
import TabContent from "./TabContent/TabContent";
import TabTitle from "./TabContent/TabTitle";
import ContentItem from "./TabContent/ContentItem";
import ContentCard from "./TabContent/ContentCard";
import ContentCardTitle from "./TabContent/ContentCardTitle";
import Card from "./TabContent/Card";

const TabWorksContent = () => {
  return (
    <TabContent>
      <TabTitle>Works</TabTitle>
      <div className={classes.items}>
        <ContentItem src={samurai} name={"Samurai Landing Page"}></ContentItem>
        <ContentItem src={lion} name={"Lion Landing Page"}></ContentItem>
        <ContentItem src={bitcoin} name={"Bitcoin Landing Page"}></ContentItem>
        <ContentItem src={bitcoin} name={"Bitcoin Landing Page"}></ContentItem>
        <ContentItem src={samurai} name={"Samurai Landing Page"}></ContentItem>
        <ContentItem src={lion} name={"Lion Landing Page"}></ContentItem>
      </div>
    </TabContent>
  );
};

const TabStackContent = () => (
  <TabContent>
    <TabTitle>Stack</TabTitle>
    <div className={classes.items}>
      {/* <ContentCard>
        <ContentCardTitle>Base</ContentCardTitle>
        <div className={classes["cards-block"]}>
          <Card svg={html}>HTML</Card>
          <Card svg={html}>HTML</Card>
          <Card svg={html}>HTML</Card>
        </div>
      </ContentCard>
      <ContentCard>
        <ContentCardTitle>ADVANCED</ContentCardTitle>
        <div className={classes["cards-block"]}>
          <Card svg={html}>HTML</Card>
          <Card svg={html}>HTML</Card>
          <Card svg={html}>HTML</Card>
        </div>
      </ContentCard>
      <ContentCard>
        <ContentCardTitle>Additional</ContentCardTitle>
        <div className={classes["cards-block"]}>
          <Card svg={html}>HTML</Card>
          <Card svg={html}>HTML</Card>
          <Card svg={html}>HTML</Card>
        </div>
      </ContentCard> */}
    </div>
  </TabContent>
);

const TabAboutContent = () => (
  <TabContent>
    <TabTitle>About</TabTitle>
  </TabContent>
);

export default function MyMain({ tabName, onClick }) {
  return (
    <main className={classes.main}>
      <Tabs>
        <Tab onClick={onClick} name="works">
          Works
        </Tab>
        <Tab onClick={onClick} name="stack">
          Stack
        </Tab>
        <Tab onClick={onClick} name="about">
          About
        </Tab>
      </Tabs>
      <TabContentWrapper>
        {tabName === "works" && <TabWorksContent />}
        {tabName === "stack" && <TabStackContent />}
        {tabName === "about" && <TabAboutContent />}
      </TabContentWrapper>
    </main>
  );
}
