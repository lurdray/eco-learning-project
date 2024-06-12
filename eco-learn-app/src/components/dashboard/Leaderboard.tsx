import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const places = [
    {
      rank: "4th",
      username: "Sammy Max",
      tokens: "89,500",
    },
    {
      rank: "5th",
      username: "Sarah Noah",
      tokens: "85,950",
    },
    {
      rank: "6th",
      username: "Mercy Wells",
      tokens: "80,800",
    },
    
  ]
  
  export function Leaderboard() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-black">Rank</TableHead>
            <TableHead className="text-black">Username</TableHead>
            <TableHead className="text-black">Tokens</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {places.map((place) => (
            <TableRow key={place.username}>
              <TableCell className="font-medium">{place.rank}</TableCell>
              <TableCell>{place.username}</TableCell>
              <TableCell>{place.tokens}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  