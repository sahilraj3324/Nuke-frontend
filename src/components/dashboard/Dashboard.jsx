import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

import {
  
 
  CreditCard,

  Search,
 
} from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "../ui/table";
import { Tabs, TabsContent, } from "../ui/tabs";

import Resct ,{ useEffect , useState } from "react";

export const description =
  "An orders dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. The main area has a list of recent orders with a filter and export button. The main area also has a detailed view of a single order with order details, shipping information, billing information, customer information, and payment information.";
export function Dashboard() {


  const [repo , setRepo] = useState([])
  const [suggestedrepo , setSuggestedrepo] = useState([])
  const [searchResults , setSearchResults] = useState([])
  const [searchQuery , setSearchQuery] = useState("")

  useEffect(()=>{
    const userId = localStorage.getItem("userId")

    const fetchRepo = async () => {

      try{
        const res = await fetch(`http://localhost:3000/repo/user/${userId}`)
      const data = await res.json()
      setRepo(data.repo)
      }catch(err){
        console.error("Error fetching repo" , err)
      }
      
    }
    const suggestedRepo = async () => {

      try{
        const res = await fetch(`http://localhost:3000/repo/all`)
      const data = await res.json()
      setSuggestedrepo(data)
      console.log(data)
      }catch(err){
        console.error("Error fetching repo" , err)
      }
      
    }
    fetchRepo()
    suggestedRepo()

  } , [])
  
  useEffect(()=>{
    if (searchQuery == ''){
      setSearchResults(repo)
    }
    else{
      const filteredRepo = repo.filter((repo) => repo.name.toLowerCase().includes(searchQuery.toLowerCase()))
      setSearchResults(filteredRepo)
    }
  } , [searchQuery , repo])


  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40 ">



      


      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
         

          <div className="relative ml-auto flex-1 md:grow-0">
            
           
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <Tabs defaultValue="week">



              <TabsContent value="week">
                <Card x-chunk="dashboard-05-chunk-3">
                  <CardHeader className="px-7">
                    <CardTitle>Your Reposotories</CardTitle>
                    <br></br>
                    <CardDescription>
                      <div className="relative ml-auto flex-1 md:grow-0">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="search"
                          placeholder="Search..."
                          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                          value ={searchQuery}
                          onChange = {(e)=> setSearchQuery(e.target.value)}
                        />
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                    
                      <TableBody>

{searchResults.map((rep) => {
  return(
                        <TableRow className="bg-accent" key={repo._id}>
                          <TableCell>
                            <div className="font-medium">{rep.name}</div>
                            
                          </TableCell>
                         
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              {rep.visibility == false ? "Privet" : "Public"}
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-23
                          </TableCell>
                        </TableRow>

)
})}
                        
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <div>
            <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
              <CardHeader className="flex flex-row items-start bg-muted/50">
                <div className="grid gap-0.5">
                  <CardTitle className="group flex items-center gap-2 text-lg">
                    Suggest Reposetories
    
                  </CardTitle>

                </div>
                <div className="ml-auto flex items-center gap-1">
                 
                  
                </div>
              </CardHeader>
              <CardContent className="p-6 text-sm">


                {suggestedrepo.map((rep)=>{
                  return(
              <div className="grid gap-3" key={repo._id}>
                  <dl className="grid gap-3">
                    <div className="flex items-center justify-between mt-3">
                      <dt className="text-lg font-semibold">{rep.name}</dt>
                      <dd>{rep.description}</dd>
                    </div>
                    
                  </dl>
                  
                </div>
                  )
})}


                <Separator className="my-2" />
                <div className="grid gap-3">
                  <div className="font-semibold">Order Details</div>
                  <ul className="grid gap-3">
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Glimmer Lamps x <span>2</span>
                      </span>
                      <span>$250.00</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Aqua Filters x <span>1</span>
                      </span>
                      <span>$49.00</span>
                    </li>
                  </ul>
                  <Separator className="my-2" />
                  <ul className="grid gap-3">
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>$299.00</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>$5.00</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Tax</span>
                      <span>$25.00</span>
                    </li>
                    <li className="flex items-center justify-between font-semibold">
                      <span className="text-muted-foreground">Total</span>
                      <span>$329.00</span>
                    </li>
                  </ul>
                </div>
                <Separator className="my-4" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-3">
                    <div className="font-semibold">Shipping Information</div>
                    <address className="grid gap-0.5 not-italic text-muted-foreground">
                      <span>Liam Johnson</span>
                      <span>1234 Main St.</span>
                      <span>Anytown, CA 12345</span>
                    </address>
                  </div>
                  <div className="grid auto-rows-max gap-3">
                    <div className="font-semibold">Billing Information</div>
                    <div className="text-muted-foreground">
                      Same as shipping address
                    </div>
                  </div>
                </div>
               
                
                <Separator className="my-4" />
                <div className="grid gap-3">
                  <div className="font-semibold">Payment Information</div>
                  <dl className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <dt className="flex items-center gap-1 text-muted-foreground">
                        <CreditCard className="h-4 w-4" />
                        Visa
                      </dt>
                      <dd>**** **** **** 4532</dd>
                    </div>
                  </dl>
                </div>
              </CardContent>
              <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                <div className="text-xs text-muted-foreground">
                  Updated <time dateTime="2023-11-23">November 23, 2023</time>
                </div>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
