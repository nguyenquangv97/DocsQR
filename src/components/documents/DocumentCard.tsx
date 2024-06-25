import { DocumentCardProps } from '@/types'

const DocumentCard = ({
  documentTitle,
  creationTime

}: DocumentCardProps) => {
  return (
    <div className="cursor-pointer">
      <figure className="flex flex-col gap-2">
        <h1>{documentTitle}</h1>
        <p>{creationTime}</p>
        {/*  TODO: docviewer */}
      </figure>
    </div>
  )
}

export default DocumentCard