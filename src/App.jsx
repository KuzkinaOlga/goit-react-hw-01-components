import ProfileItem from 'components/ProfileGallery/ProfileItem';
import { StatisticGallery } from 'components/StatisticGallery/StatisticGallery';
import { FriendsList } from 'components/FriendsList/FriendsList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import profile from 'data/user.json';
import statistics from 'data/data.json';
import friends from 'data/friends.json';
import items from 'data/transactions.json';

export default function App() {
  return (
    <div>
      <ProfileItem
        username={profile.username}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        stats={profile.stats}
      />
      <StatisticGallery title="kjkljhl" stats={statistics} />
      <FriendsList friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
}
