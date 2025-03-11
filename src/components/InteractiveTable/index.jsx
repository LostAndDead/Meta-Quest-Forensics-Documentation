// src/components/InteractiveTable/index.js
import { useMemo, useState } from "react";
import styles from "./styles.module.css";

export default function InteractiveTable({ data, columns }) {
	const [sortConfig, setSortConfig] = useState({
		key: null,
		direction: "ascending",
	});
	const [filterValue, setFilterValue] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const rowsPerPage = 10;

	// Sorting logic
	const sortedData = useMemo(() => {
		const sortableData = [...data];
		if (sortConfig.key) {
			sortableData.sort((a, b) => {
				if (a[sortConfig.key] < b[sortConfig.key]) {
					return sortConfig.direction === "ascending" ? -1 : 1;
				}
				if (a[sortConfig.key] > b[sortConfig.key]) {
					return sortConfig.direction === "ascending" ? 1 : -1;
				}
				return 0;
			});
		}
		return sortableData;
	}, [data, sortConfig]);

	// Filter logic
	const filteredData = useMemo(() => {
		return sortedData.filter((item) => {
			return Object.values(item).some((value) =>
				String(value).toLowerCase().includes(filterValue.toLowerCase()),
			);
		});
	}, [sortedData, filterValue]);

	// Pagination logic
	const paginatedData = useMemo(() => {
		const startIndex = (currentPage - 1) * rowsPerPage;
		return filteredData.slice(startIndex, startIndex + rowsPerPage);
	}, [filteredData, currentPage]);

	const totalPages = Math.ceil(filteredData.length / rowsPerPage);

	// Handle sorting
	const requestSort = (key) => {
		let direction = "ascending";
		if (sortConfig.key === key && sortConfig.direction === "ascending") {
			direction = "descending";
		}
		setSortConfig({ key, direction });
	};

	return (
		<div className={styles.tableContainer}>
			<div className={styles.tableControls}>
				<input
					type="text"
					placeholder="Search..."
					value={filterValue}
					onChange={(e) => {
						setFilterValue(e.target.value);
						setCurrentPage(1); // Reset to first page on filter
					}}
					className={styles.filterInput}
				/>
			</div>

			<table className={styles.table}>
				<thead>
					<tr>
						{columns.map((column) => (
							<th
								key={column.key}
								onClick={() => requestSort(column.key)}
								className={styles.sortableHeader}
							>
								{column.label}
								{sortConfig.key === column.key && (
									<span className={styles.sortIndicator}>
										{sortConfig.direction === "ascending" ? " ▲" : " ▼"}
									</span>
								)}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{paginatedData.map((row, rowIndex) => (
						<tr key={rowIndex}>
							{columns.map((column) => (
								<td key={column.key}>{row[column.key]}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>

			{filteredData.length > rowsPerPage && (
				<div className={styles.pagination}>
					<button
						onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
						disabled={currentPage === 1}
					>
						Previous
					</button>
					<span>
						Page {currentPage} of {totalPages}
					</span>
					<button
						onClick={() =>
							setCurrentPage((prev) => Math.min(prev + 1, totalPages))
						}
						disabled={currentPage === totalPages}
					>
						Next
					</button>
				</div>
			)}
		</div>
	);
}
