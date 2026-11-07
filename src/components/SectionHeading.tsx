interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
}

export const SectionHeading = ({ index, label, title }: SectionHeadingProps) => (
  <div className="mb-8">
    <p className="section-label">
      {index} / {label}
    </p>
    <h2 className="section-title">{title}</h2>
  </div>
);
