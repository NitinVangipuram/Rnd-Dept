import React, { useState, useEffect } from "react";
import PageSkeleton from "../components/LoadingSkeleton/PageSkeleton";

const Message = () => {
  const [docContent, setDocContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPublicGoogleDocContent = async () => {
      const fileId = "1erNNTzZQF3MTEzao2Sr2hRA7wp_HwohI9Ah9yiAzjPU";
      const exportUrl = `https://docs.google.com/document/d/${fileId}/export?format=html`;

      try {
        const response = await fetch(exportUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const htmlContent = await response.text();
        setDocContent(htmlContent);
      } catch (err) {
        setError(err);
        console.error("Failed to fetch public Google Doc content:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPublicGoogleDocContent();
  }, []); 

  if (loading) {
    return (
     <PageSkeleton/>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-start px-4 py-8">
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-6 md:p-10 text-center text-red-500">
          Error loading message: {error.message}
          <p>Please ensure the Google Doc is publicly accessible ('Anyone with the link can view').</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-start px-4 py-8">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-6 md:p-10">
        <h1 className="
          text-center
          text-[24px] md:text-[30px] lg:text-[30px]
          font-semibold
          !text-purple-600
          font-lato
          not-italic
          leading-normal
          tracking-[1.8px]
          py-8
        ">
          Message from Dean
        </h1>
        <div className="relative w-full">
          <div
            className="
              prose                                /* Apply prose for base styling of raw HTML */
              max-w-none                           /* Remove default max-width from prose */
              text-black                           /* color: #000; */
              text-justify                         /* text-align: justify; */
              font-lato                            /* font-family: Lato; (Requires config) */
              text-[16px] md:text-[18px]           /* Responsive font-size */
              not-italic                           /* font-style: normal; */
              font-normal                          /* font-weight: 400; */
              leading-[150%]                       /* line-height: 150%; */
              tracking-[0.9px]                     /* letter-spacing: 0.9px; */
            "
            dangerouslySetInnerHTML={{ __html: docContent }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Message;