"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EmailBuilder() {
  const [subject, setSubject] = useState("")
  const [content, setContent] = useState("")

  const handleSave = () => {
    // Here you would save the email template
    console.log({ subject, content })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Email Builder</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="edit">
          <TabsList>
            <TabsTrigger value="edit">Edit</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          <TabsContent value="edit">
            <div className="space-y-4">
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Enter email subject"
                />
              </div>
              <div>
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Enter email content"
                  rows={10}
                />
              </div>
              <Button onClick={handleSave}>Save Template</Button>
            </div>
          </TabsContent>
          <TabsContent value="preview">
            <div className="border p-4 rounded-md">
              <h2 className="text-xl font-bold mb-2">{subject}</h2>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

