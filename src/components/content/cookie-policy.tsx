export const ContentCookiePolicy = () => (
  <>
    <h1 className="govuk-heading-l">Cookies</h1>
    <h3 className="govuk-heading-m">What cookies are</h3>
    <p className="govuk-body">
      Cookies are small files saved on your phone, tablet or computer when you
      visit a website.
    </p>
    <p className="govuk-body">
      We use an essential cookie to keep your data secure while you use the
      Digital Planning Register.
    </p>
    <h3 className="govuk-heading-m">Essential cookies</h3>
    <p className="govuk-body">
      Essential cookies keep your information secure while you use this service.
      We do not need to ask permission to use essential cookies.
    </p>
    <p className="govuk-body">We use the following essential cookies:</p>
    <table className="govuk-table govuk-table--small-text-until-tablet">
      <thead className="govuk-table__head">
        <tr className="govuk-table__row">
          <th scope="col" className="govuk-table__header">
            Name
          </th>
          <th scope="col" className="govuk-table__header">
            Purpose
          </th>
          <th scope="col" className="govuk-table__header">
            Expires
          </th>
        </tr>
      </thead>
      <tbody className="govuk-table__body">
        <tr className="govuk-table__row">
          <th scope="row" className="govuk-table__header">
            consentCookie
          </th>
          <td className="govuk-table__cell">Stores your cookie preferences</td>
          <td className="govuk-table__cell">1 year</td>
        </tr>
      </tbody>
    </table>
    <h3 className="govuk-heading-m">Essential session storage</h3>
    <p className="govuk-body">
      This service uses session storage to temporarily store small amounts of
      data on your device. This helps the service work properly and improves
      your experience as you move through the Digital Planning Register process.
    </p>
    <p className="govuk-body">Session storage:</p>
    <ul className="govuk-list govuk-list--bullet">
      <li>stores data only for the duration of your browser session</li>
      <li>is deleted when you close your browser</li>
      <li>is not accessible by other websites</li>
      <li>does not automatically send data to our servers</li>
    </ul>
    <p className="govuk-body">We use the following session storage items:</p>
    <table className="govuk-table govuk-table--small-text-until-tablet">
      <thead className="govuk-table__head">
        <tr className="govuk-table__row">
          <th scope="col" className="govuk-table__header">
            Name
          </th>
          <th scope="col" className="govuk-table__header">
            Purpose
          </th>
          <th scope="col" className="govuk-table__header">
            Expires
          </th>
        </tr>
      </thead>
      <tbody className="govuk-table__body">
        <tr className="govuk-table__row">
          <th scope="row" className="govuk-table__header">
            presubmission
          </th>
          <td className="govuk-table__cell">
            Tracks whether you have started making a comment
          </td>
          <td className="govuk-table__cell">
            When you submit a comment or close your browser
          </td>
        </tr>
        <tr className="govuk-table__row">
          <th scope="row" className="govuk-table__header">
            sentiment
          </th>
          <td className="govuk-table__cell">
            Stores what sentiment you selected about a planning application,
            whether you are opposed, neutral or support it.
          </td>
          <td className="govuk-table__cell">
            When you submit a comment or close your browser
          </td>
        </tr>
        <tr className="govuk-table__row">
          <th scope="row" className="govuk-table__header">
            selectedTopics
          </th>
          <td className="govuk-table__cell">
            Stores which topics you selected to comment on, such as 'Impacts on
            natural light,' 'Noise from new uses,' etc
          </td>
          <td className="govuk-table__cell">
            When you submit a comment or close your browser
          </td>
        </tr>
        <tr className="govuk-table__row">
          <th scope="row" className="govuk-table__header">
            comment
          </th>
          <td className="govuk-table__cell">
            Stores the text you write about each topic in your comment
          </td>
          <td className="govuk-table__cell">
            When you submit a comment or close your browser
          </td>
        </tr>
        <tr className="govuk-table__row">
          <th scope="row" className="govuk-table__header">
            personalDetails
          </th>
          <td className="govuk-table__cell">
            Stores the identifying information entered into the final step, such
            as name, address and email
          </td>
          <td className="govuk-table__cell">
            When you submit a comment or close your browser
          </td>
        </tr>
        <tr className="govuk-table__row">
          <th scope="row" className="govuk-table__header">
            submissionComplete
          </th>
          <td className="govuk-table__cell">
            Tracks whether the submission was successful
          </td>
          <td className="govuk-table__cell">
            When you submit a comment or close your browser
          </td>
        </tr>
      </tbody>
    </table>
    <p className="govuk-body">
      Note: Some session storage items may include additional identifying
      information, such as the planning application reference number, to manage
      multiple submissions.
    </p>
    <h3 className="govuk-heading-m">Analytics cookies</h3>
    <p className="govuk-body">
      With your permission, we use Google Analytics to collect data about how
      you use this service. This information helps us to improve our service.
    </p>
    <p className="govuk-body">
      Google is not allowed to use or share our analytics data with anyone.
    </p>
    <p className="govuk-body">
      Google Analytics store anonymised information about:
    </p>
    <table className="govuk-table govuk-table--small-text-until-tablet">
      <thead className="govuk-table__head">
        <tr className="govuk-table__row">
          <th scope="col" className="govuk-table__header">
            Name
          </th>
          <th scope="col" className="govuk-table__header">
            Purpose
          </th>
          <th scope="col" className="govuk-table__header">
            Expires
          </th>
        </tr>
      </thead>
      <tbody className="govuk-table__body">
        <tr className="govuk-table__row">
          <th scope="row" className="govuk-table__header">
            _ga
          </th>
          <td className="govuk-table__cell">Used to identify unique users</td>
          <td className="govuk-table__cell">2 years</td>
        </tr>
      </tbody>
    </table>
  </>
);
