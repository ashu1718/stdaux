import styles from "./bodyItem.module.css";
const Bodyitem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.body1}>
        <h1>Powerhub</h1>
        <p>
          Powerhub is an advanced monitoring and control platform for managing
          distributed energy resources, renewable power plants and microgrids.
          Powerhub is deployed and in use across Tesla’s fleet of over one
          gigawatt-hour of operating commercial sites. Customers ranging from
          facility managers to power plant operators use Powerhub to maximize
          operational efficiency, uptime and asset value. Powerhub covers all
          common elements of Supervisory Control and Data Acquisition (SCADA)
          systems and offers standard customizations to meet the operational
          needs of small, large and virtual power plants. Powerhub is part of
          Autonomous Control, Tesla's suite of optimization software solutions.
        </p>
      </div>
      <div className={styles.body1}>
        <h2>Integrated Product Ecosystem</h2>
        <img className={styles.img1} src="./images/img1.png" alt="image 1" />
        <p>
          Powerhub provides a single interface for managing many combinations of
          energy assets including solar, storage and select non-Tesla assets
          (generators, breakers, transformers). Data for site meters, individual
          battery blocks, solar inverters and diesel generators provide the most
          comprehensive view of site information.
        </p>
      </div>
      <div className={styles.body1}>
        <h2>Fleet Management</h2>
        <img className={styles.img1} src="./images/img2.png" alt="image 1" />
        <p>
          The Powerhub software platform was built with the flexibility required
          to meet a wide range of customer needs and project configurations.
          Powerhub automatically updates its views to reflect only relevant
          information from site to site. Additionally, Powerhub provides
          operational insights across large aggregations of systems. Performance
          metrics are available for monitoring critical parameters in real-time.
          Powerhub users can trend historical data and build custom reports that
          are most useful to their unique operation and easily export data for
          extended analysis.
        </p>
      </div>
      <div className={styles.body1}>
        <h2>Real-time Control</h2>
        <p>
          Powerhub enables operators to directly control power plants in
          real-time, either on-site or virtually, across large fleets. Depending
          on project requirements, Powerhub can be configured for issuing direct
          power commands from an on-site control room or if preferred, securely
          update operational parameters from a remote location. Operational
          parameters that can be configured remotely include:
        </p>
        <ul>
          <li>Setting quiet hours for microgrid operation</li>
          <li>Configuring preferred set points for frequency/watt control</li>
          <li>
            Scheduling future dispatch for providing aggregate demand response
          </li>
        </ul>
        <p>
          Aggregators can manage virtual power plant dispatch either directly
          from the Powerhub cloud user interface or by using Tesla’s Powerhub
          API. Telemetry can also be integrated into a third-party distributed
          energy resource management system (DERMS).
        </p>
      </div>
      <div className={styles.body1}>
        <h2>Actionable Performance Insights</h2>
        <p>
          Powerhub provides operators with system alerts and actionable insights
          that improve situational awareness and safe decision making. The
          active alerts dashboard extends beyond the energy storage system to
          cover the balance of plant subsystems including transformers, breakers
          and fire detection systems. For issues that fall outside of Tesla's
          service scope, Powerhub identifies issues and provides the user fast
          recommendations to troubleshoot and resolve issues.
        </p>
      </div>

      <div className={styles.body1}>
        <h2>Learn More About Powerhub</h2>
        <p>
          Contact us to learn more about Powerhub and the full suite of
          <a href="https://www.tesla.com/support/energy/tesla-software">
            Tesla Energy Software
          </a>
          .
        </p>
        <button className={styles.button1}>Contact Us</button>
      </div>
    </div>
  );
};
export default Bodyitem;
