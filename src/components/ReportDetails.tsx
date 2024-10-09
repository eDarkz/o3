import React, { useState } from 'react';
import { OpportunityReport } from '../types';
import Modal from './Modal';
import ReportForm from './ReportForm';
import ConfirmationModal from './ConfirmationModal';
import { Edit, Trash, Plus, X, MessageCircle } from 'lucide-react';

interface ReportDetailsProps {
  report: OpportunityReport;
  onUpdate: (id: string, updatedReport: OpportunityReport) => void;
  onDelete: (id: string) => void;
  onAddUpdate: (id: string, update: string) => void;
  onDeleteUpdate: (reportId: string, updateIndex: number) => void;
}

const ReportDetails: React.FC<ReportDetailsProps> = ({
  report,
  onUpdate,
  onDelete,
  onAddUpdate,
  onDeleteUpdate
}) => {
  // ... (existing state variables)

  // ... (existing functions)

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4">{report.guestName}</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <p><strong>Habitación:</strong> {report.roomNumber}</p>
        <p><strong>Reserva:</strong> {report.reservationNumber}</p>
        <p><strong>Agencia:</strong> {report.agency}</p>
        <p><strong>Reportado por:</strong> {report.reportedBy}</p>
        <p><strong>Departamento:</strong> {report.department}</p>
        <p><strong>Llegada:</strong> {report.arrivalDate}</p>
        <p><strong>Salida:</strong> {report.departureDate}</p>
        <p><strong>Estado de ánimo:</strong> {report.guestMood}</p>
        <p><strong>Creado el:</strong> {formatDate(report.createdAt)}</p>
      </div>
      
      {/* ... (rest of the component remains the same) */}
    </div>
  );
};

export default ReportDetails;