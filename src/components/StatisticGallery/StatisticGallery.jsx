import PropTypes from 'prop-types';
import css from './StatisticGallery.module.css';

export const StatisticGallery = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
StatisticGallery.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
