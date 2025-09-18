"use client"

import { useState, useCallback, useMemo } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [hasPreloaded, setHasPreloaded] = useState(false)

  const handleOpen = useCallback(() => {
    setIsOpen(true)
    if (!hasPreloaded) {
      setIsLoading(true)
    }
  }, [hasPreloaded])

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleIframeLoad = useCallback(() => {
    setIsLoading(false)
    setHasPreloaded(true)
  }, [])

  const chatbotIframe = useMemo(
    () => {
      const cacheBuster = isOpen ? Date.now().toString() : "initial"
      const iframeSrc = `https://dify.bties.co.jp/chatbot/44KlGsdWfIn35Phh?cb=${cacheBuster}`
      return (
        <iframe
          key={cacheBuster}
          src={iframeSrc}
          className="w-full h-full border-0"
          allow="microphone; camera; geolocation"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
          referrerPolicy="strict-origin-when-cross-origin"
          title="FAQ чатбот"
          onLoad={handleIframeLoad}
          onError={() => {
            setIsLoading(false)
          }}
        />
      )
    },
    [handleIframeLoad, isOpen],
  )

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleOpen}
          className="h-20 w-20 rounded-full bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200"
          size="icon"
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_mrrk60mrrk60mrrk-f4z3UZxtDR8rqAAQEI6H2DcEhoXerL.png"
            alt="FAQ бот"
            className="h-16 w-16 object-contain"
          />
        </Button>
      </div>

      <div className={`fixed inset-0 z-50 ${isOpen ? "flex" : "hidden"} items-center justify-center p-4 bg-black/50`}>
        <div className="relative w-full max-w-2xl h-[70vh] bg-white rounded-lg shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <h3 className="text-lg font-semibold">FAQ Chatbot</h3>
            <Button onClick={handleClose} variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="relative" style={{ height: "calc(100% - 60px)" }}>
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
                  <p className="text-gray-600">Чатбот ачаалж байна...</p>
                </div>
              </div>
            )}

            {chatbotIframe}
          </div>
        </div>
      </div>
    </>
  )
}
