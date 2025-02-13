import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function CustomerTestimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our satisfied customers about their experience with our email marketing service.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-start gap-4 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 border">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">John Doe</h3>
                <p className="text-sm text-muted-foreground">CEO, Acme Inc.</p>
              </div>
            </div>
            <blockquote className="text-lg font-medium leading-relaxed">
              &ldquo;The customer service I received was exceptional. The support team went above and beyond to address
              my concerns.&rdquo;
            </blockquote>
          </div>
          <div className="flex flex-col items-start gap-4 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 border">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Jane Smith</h3>
                <p className="text-sm text-muted-foreground">Marketing Manager, Globex Corp.</p>
              </div>
            </div>
            <blockquote className="text-lg font-medium leading-relaxed">
              &ldquo;The product has been a game-changer for our business. It has streamlined our workflows and improved
              our efficiency.&rdquo;
            </blockquote>
          </div>
          <div className="flex flex-col items-start gap-4 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 border">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Michael Johnson</h3>
                <p className="text-sm text-muted-foreground">IT Manager, Stark Industries</p>
              </div>
            </div>
            <blockquote className="text-lg font-medium leading-relaxed">
              &ldquo;The platform is incredibly user-friendly and intuitive. It has made our team more productive and
              collaborative.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}