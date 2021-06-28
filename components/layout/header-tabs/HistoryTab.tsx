import ActivityLogs from '../ActivityLogs'
import TabsOverlay from './TabsOverlay'

export default function HistoryTab({ showHistoryTab }) {
  return (
    <>
      {showHistoryTab && (
        <TabsOverlay>
          <ActivityLogs />
        </TabsOverlay>
      )}
    </>
  )
}
