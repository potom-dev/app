import { Heading } from "@/components/ui/heading";

/**
 * Renders the application logo as a heading element with optional custom styling.
 *
 * @param className - Optional CSS class name to apply to the heading
 * @returns The logo displayed as a heading element
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Heading className={className}>
      potom
    </Heading>
  )
}