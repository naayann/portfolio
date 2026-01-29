import { GitHubCalendar } from "react-github-calendar"

const GithubStats = () => {
  return (
    <div className='flex justify-center items-center w-full overflow-hidden min-h-37.5 py-8'>
      <GitHubCalendar
        username="naayann"
        colorScheme="dark"
        fontSize={12}
        blockSize={9.5}
        blockMargin={5}
        theme={{
          light: [
            "#f5f5f5",
            "#e5e5e5",
            "#d4d4d4",
            "#a3a3a3",
            "#737373",
          ],
        }}
        />
    </div>
  )
}

export default GithubStats

